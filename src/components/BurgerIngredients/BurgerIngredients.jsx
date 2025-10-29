import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import burgerIngredientsStyles from './BurgerIngredients.module.css';
import { IngredientType } from '../../utils/types';
import BurgerIngredientsTabMenu from './BurgerIngredientsTabMenu/BurgerIngredientsTabMenu';
import BurgerIngredientsItem from './BurgerIngredientsItem/BurgerIngredientsItem';
import BurgerIngredientsMenuSection from './BurgerIngredientsMenuSection/BurgerIngredientsMenuSection';
import Modal from '../Modal/Modal';
import IngredientDetails from '../Modal/IngredientDetails/IngredientDetails';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentIngredient } from '../../services/CurrentIngredient/CurrentIngredientSlice';

function BurgerIngredients() {
  const [currentTab, setCurrentTab] = useState('one');
  const [modalOpen, setModalOpen] = useState(false);
  const ingredientsContainerRef = useRef(null);
  const observerRef = useRef(null);

  const dispatch = useDispatch();
  const currentIngredient = useSelector((state) => state.currentIngredient.currentIngredient);
  const ingredients = useSelector((state) => state.ingredients.ingredients);

  const sections = [
    { id: 'buns-section', title: 'Булки', data: ingredients.filter((item) => item.type === 'bun') },
    {
      id: 'sauces-section',
      title: 'Соусы',
      data: ingredients.filter((item) => item.type === 'sauce'),
    },
    {
      id: 'main-section',
      title: 'Начинки',
      data: ingredients.filter((item) => item.type === 'main'),
    },
  ];

  const handleModalOpen = useCallback(
    (item) => {
      dispatch(setCurrentIngredient(item));
      setModalOpen(true);
    },
    [dispatch]
  );

  const handleModalClose = useCallback(() => {
    setModalOpen(false);
    dispatch(setCurrentIngredient({}));
  }, [dispatch]);

  useEffect(() => {
    const container = ingredientsContainerRef.current;
    if (!container) return;

    const sectionToTabMap = {
      'buns-section': 'one',
      'sauces-section': 'two',
      'main-section': 'three',
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            id: entry.target.id,
            top: entry.boundingClientRect.top,
            bottom: entry.boundingClientRect.bottom,
          }))
          .sort((a, b) => a.top - b.top);

        if (visibleSections.length > 0) {
          const activeSection = visibleSections[0];
          const newTab = sectionToTabMap[activeSection.id];
          if (newTab && newTab !== currentTab) {
            setCurrentTab(newTab);
          }
        }
      },
      {
        root: container,
        rootMargin: '0px 0px -70% 0px',
        threshold: 0.1,
      }
    );

    observerRef.current = observer;

    const sectionHeaders = container.querySelectorAll('[data-section-header]');
    sectionHeaders.forEach((header) => {
      observer.observe(header);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [currentTab]);

  return (
    <>
      <section className={`${burgerIngredientsStyles.BurgerIngredients} pt-10`}>
        <div>
          <h2 className={`${burgerIngredientsStyles.title} text_type_main-large mb-5`}>
            Соберите бургер
          </h2>
        </div>
        <div className="mb-10">
          <BurgerIngredientsTabMenu current={currentTab} />
        </div>
        <div className={burgerIngredientsStyles.list} ref={ingredientsContainerRef}>
          {sections.map((section) => (
            <div key={section.id}>
              <h3 id={section.id} data-section-header className="text text_type_main-medium mb-6">
                {section.title}
              </h3>
              <BurgerIngredientsMenuSection>
                {section.data.map((item) => (
                  <BurgerIngredientsItem
                    key={item._id}
                    item={item}
                    onClick={() => handleModalOpen(item)}
                  />
                ))}
              </BurgerIngredientsMenuSection>
            </div>
          ))}
        </div>
      </section>

      {modalOpen && currentIngredient && (
        <Modal onClose={handleModalClose}>
          <IngredientDetails item={currentIngredient} />
        </Modal>
      )}
    </>
  );
}

export default BurgerIngredients;
