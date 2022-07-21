import React, { useEffect, useState } from 'react';
import AuthorCard from '../components/AuthorCard';
import { getAuthors } from '../api/authorData';
import { useAuth } from '../utils/context/authContext';

export default function Authors() {
  const [authors, setAuthors] = useState([]);

  const { user } = useAuth();

  const getAllTheAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };

  useEffect(() => {
    getAllTheAuthors();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (

    <div>
      {authors.map((authorObj) => (
        <AuthorCard
          key={authorObj.firebaseKey}
          authorObj={authorObj}
          onUpdate={getAllTheAuthors}
        />
      ))}
    </div>
  );
}
