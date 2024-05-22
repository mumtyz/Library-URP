import React, { useState } from 'react';
import styled from 'styled-components';
import Material from './Material';

const materials = {
  // ...Semester 1
  "Manajemen Survey dan Data": [
    { title: "System of City", pdfPath: "/pdf/1/msd/soc.pdf" },
    { title: "Materi 2", pdfPath: "/pdf/1/msd/materi2.pdf" },
  ],
  "Geo Ekologi": [
    { title: "Materi 1", pdfPath: "/pdf/semester1/fisika/materi1.pdf" },
    { title: "Materi 2", pdfPath: "/pdf/semester1/fisika/materi2.pdf" },
  ],
  "Teknik Pemetaan": [
    { title: "Materi 1", pdfPath: "/pdf/semester1/fisika/materi1.pdf" },
    { title: "Materi 2", pdfPath: "/pdf/semester1/fisika/materi2.pdf" },
  ],
  "Pengantar Geografi": [
    { title: "Materi 1", pdfPath: "/pdf/semester1/fisika/materi1.pdf" },
    { title: "Materi 2", pdfPath: "/pdf/semester1/fisika/materi2.pdf" },
  ],
  "Bahasa Indonesia": [
    { title: "Materi 1", pdfPath: "/pdf/semester1/fisika/materi1.pdf" },
    { title: "Materi 2", pdfPath: "/pdf/semester1/fisika/materi2.pdf" },
  ],
  "Pendidikan Agama Islam": [
    { title: "Materi 1", pdfPath: "/pdf/semester1/fisika/materi1.pdf" },
    { title: "Materi 2", pdfPath: "/pdf/semester1/fisika/materi2.pdf" },
  ],
  "Pengantar PWK": [
    { title: "Materi 1", pdfPath: "/pdf/semester1/fisika/materi1.pdf" },
    { title: "Materi 2", pdfPath: "/pdf/semester1/fisika/materi2.pdf" },
  ],
  "Matematika Perencanaan": [
    { title: "Materi 1", pdfPath: "/pdf/semester1/fisika/materi1.pdf" },
    { title: "Materi 2", pdfPath: "/pdf/semester1/fisika/materi2.pdf" },
  ],
  "Teknik Presentasi": [
    { title: "Materi 1", pdfPath: "/pdf/semester1/fisika/materi1.pdf" },
    { title: "Materi 2", pdfPath: "/pdf/semester1/fisika/materi2.pdf" },
  ],
  // ...data materi lainnya
};

const CourseContainer = styled.div`
  background: #333;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  position: relative;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const CourseTitle = styled.h3`
  margin-bottom: 15px;
  color: #fff;
`;

const MaterialList = styled.div`
  display: flex;
  flex-direction: column;
`;

const CourseImage = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
`;

function Course({ name }) {
  const [showMaterials, setShowMaterials] = useState(false);
  const courseMaterials = materials[name] || [];

  const handleClick = () => {
    setShowMaterials(!showMaterials);
  };

  return (
    <CourseContainer onClick={handleClick}>
      <CourseTitle>{name}</CourseTitle>
      {showMaterials && (
        <MaterialList>
          {courseMaterials.map((material, index) => (
            <Material key={index} title={material.title} pdfPath={material.pdfPath} />
          ))}
        </MaterialList>
      )}
      <CourseImage src="https://uns.ac.id/id/wp-content/uploads/2023/06/logo-uns-biru-1.png" alt="Course logo" />
    </CourseContainer>
  );
}

export default Course;