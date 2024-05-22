import React, { useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Semester from './components/Semester';

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #1a1a1a;
  min-height: 100vh;
  color: #fff;
`;

const Header = styled.h1`
  font-size: 2.5em;
  color: #fff;
  margin-bottom: 40px;
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavLink = styled(Link)`
  padding: 10px 20px;
  text-decoration: none;
  color: #61dafb;
  font-size: 1.2em;
  border: 1px solid #61dafb;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #61dafb;
    color: #1a1a1a;
  }
`;

function App() {
  const [selectedSemester, setSelectedSemester] = useState(null);
  const navigate = useNavigate();

  const handleSemesterClick = (semester) => {
    if (selectedSemester === semester) {
      setSelectedSemester(null);
      navigate('/');
    } else {
      setSelectedSemester(semester);
    }
  };

  const handleBackClick = () => {
    setSelectedSemester(null);
    navigate('/');
  };

  return (
    <AppContainer>
      <Header>Library URP</Header>
      <Nav>
        {selectedSemester === null ? (
          [1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
            <NavLink 
              key={sem} 
              to={`/semester/${sem}`} 
              onClick={() => handleSemesterClick(sem)}
            >
              Semester {sem}
            </NavLink>
          ))
        ) : (
          <NavLink 
            to="/" 
            onClick={() => handleSemesterClick(selectedSemester)}
          >
            Semester {selectedSemester}
          </NavLink>
        )}
      </Nav>
      <Routes>
        <Route 
          path="/semester/:id" 
          element={<Semester onBack={handleBackClick} />} 
        />
      </Routes>
    </AppContainer>
  );
}

export default App;