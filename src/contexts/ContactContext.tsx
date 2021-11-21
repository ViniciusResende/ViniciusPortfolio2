import { createContext, ReactNode, useState } from 'react';

interface ContactContextData {
  isModalOpen: boolean;
  handleControlModalOpenness: (open: boolean) => void;
  fetchFormData: (
    data: FormDataProps,
    callbackSucess: () => void,
    callbackError: () => void,
  ) => void;
}

export const ContactContext = createContext({} as ContactContextData);

type FormDataProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactContextProviderProps = {
  children: ReactNode;
};

export function ContactContextProvider({
  children,
}: ContactContextProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleControlModalOpenness(open: boolean) {
    setIsModalOpen(open);
  }

  function fetchFormData(
    data: FormDataProps,
    callbackSucess: () => void,
    callbackError: () => void,
  ) {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/form`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    })
      .then((reponse) => {
        if (reponse.ok) return;
        else throw new Error('Failed to fetch data');
      })
      .then(() => {
        callbackSucess();
      })
      .catch((_error) => {
        callbackError();
      });
  }

  return (
    <ContactContext.Provider
      value={{ isModalOpen, handleControlModalOpenness, fetchFormData }}>
      {children}
    </ContactContext.Provider>
  );
}
