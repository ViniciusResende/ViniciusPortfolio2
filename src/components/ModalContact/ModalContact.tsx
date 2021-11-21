import React, { useRef, useState } from 'react';
import cx from 'classnames';

import { useContact } from '../../hooks';
import { email } from '../../helpers/validations';
import {
  send_email_fullfilled,
  send_email_rejected,
} from '../../config/ToastTexts';

import { Modal } from '../elements/Modal';
import { Toast } from '../elements/Toast';
import { Loader } from '../elements/Loader';
import styles from './ModalContact.module.scss';

export const ModalContact = () => {
  const { isModalOpen, handleControlModalOpenness, fetchFormData } =
    useContact();

  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    requiredFields: false,
    invalidEmail: false,
  });
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [shouldShowToast, setShouldShowToast] = useState(false);
  const [toastType, setToastType] = useState<'success' | 'fail'>('success');
  const [isFetchingData, setIsFetchingData] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  function validateEmail(value: string) {
    if (value && value.includes('@')) {
      return email(value);
    }
  }

  function handleEmailValidation(value: string) {
    if (!validateEmail(value)) setErrors({ ...errors, invalidEmail: false });
    else setErrors({ ...errors, invalidEmail: true });
  }

  function handleInputChange(
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const currentInputName: 'name' | 'email' | 'subject' | 'message' =
      // This part is ts ignored since I know the name of possible inputs
      //@ts-ignore
      event.target.id;

    //@ts-ignore
    if (currentInputName === 'email') handleEmailValidation(event.target.value);

    //@ts-ignore
    setValues({ ...values, [currentInputName]: event.target.value });
  }

  function formSubmitted() {
    setShouldShowToast(true);
    setIsFetchingData(false);
  }

  function formSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    const { name, email, message } = values;
    if (!name || !email || !message) {
      setErrors({ ...errors, requiredFields: true });
      return;
    }
    setIsFetchingData(true);
    resetForm();
    fetchFormData(
      values,
      () => {
        setToastType('success');
        formSubmitted();
      },
      () => {
        setToastType('fail');
        formSubmitted();
      },
    );
  }

  const resetForm = () => {
    if (formRef.current) formRef.current.reset();
    setValues({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setShowTerms(false);
    setHasAcceptedTerms(false);
  };

  return (
    <>
      {shouldShowToast && (
        <Toast
          type={toastType}
          message={
            toastType === 'success'
              ? send_email_fullfilled
              : send_email_rejected
          }
          onDismiss={() => setShouldShowToast(false)}
          timeToClose={7000}
        />
      )}
      <Modal
        isOpen={isModalOpen}
        handleOnClose={() => handleControlModalOpenness(false)}>
        <article className={styles.content}>
          <h2>Entre em contato:</h2>
          <form
            action=''
            onSubmit={formSubmit}
            ref={formRef}
            className={styles.form}>
            <section className={styles.inputSection}>
              <input
                className={cx({ [styles.error]: errors.requiredFields })}
                type='text'
                id='name'
                placeholder='Nome'
                onChange={handleInputChange}
              />
              <input
                type='text'
                id='subject'
                placeholder='Assunto'
                onChange={handleInputChange}
              />
              <div>
                <input
                  className={cx({
                    [styles.error]:
                      errors.requiredFields || errors.invalidEmail,
                  })}
                  type='text'
                  id='email'
                  placeholder='E-mail'
                  onChange={handleInputChange}
                />
                {errors.invalidEmail && <span>Email inválido</span>}
              </div>
            </section>
            <textarea
              className={cx({ [styles.error]: errors.requiredFields })}
              id='message'
              cols={30}
              rows={10}
              placeholder='Descreva brevemente o que quer tratar...'
              onChange={handleInputChange}
            />
            <section className={styles.submitArea}>
              <div className={styles.checkboxContainer}>
                <label className={styles.checkboxWrapper}>
                  <input
                    type='checkbox'
                    onClick={() => setHasAcceptedTerms((prev) => !prev)}
                  />
                  <span className={styles.customCheckbox} />
                  Ao clicar concordo em fornecer meus dados para contato,{' '}
                </label>
                <strong onClick={() => setShowTerms((prev) => !prev)}>
                  {' '}
                  saiba mais.
                </strong>
              </div>
              {showTerms && (
                <p className={styles.termsParagraph}>
                  Ao clicar no checkbox acima e, em seguida, no botão de
                  <strong>&apos;Enviar&apos;</strong> você está concordando em
                  fornecer seus dados pessoais (nome e e-mail) para mim,
                  Vinícius Alves, com o propósito único e exclusivo de ser
                  contatado pela minha pessoa para mais informações sobre o
                  assunto que desejar tratar.
                </p>
              )}
              <div className={styles.buttonsContainer}>
                <button
                  className={styles.submitButton}
                  disabled={!hasAcceptedTerms || isFetchingData}>
                  {isFetchingData && <Loader type='small' />}
                  <span>{isFetchingData ? 'Enviando' : 'Enviar'}</span>
                </button>
                <button
                  className={styles.closeButton}
                  onClick={() => handleControlModalOpenness(false)}>
                  Fechar
                </button>
              </div>
            </section>
          </form>
        </article>
      </Modal>
    </>
  );
};
