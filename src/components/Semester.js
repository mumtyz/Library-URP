import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Course from './Course';

const semesters = {
  1: ["Manajemen Survey dan Data", "Geo Ekologi", "Teknik Pemetaan", "Pengantar Geografi", "Bahasa Indonesia", "Pendidikan Agama Islam", "Pengantar PWK", "Matematika Perencanaan", "Teknik Presentasi"],
  2: ["Tata Guna dan Pengembangan Lahan", "Teori dan Kebijakan Perumahan dan Permukiman ", "Sosiologi"," Infrastruktur Wilayah dan Kota ", "Ekonomi Wilayah Kota "," Kependudukan "," Perencanaan Transport "," Proses Perencanaan "," Managemen Lingkungan"],
  3: ["Analisis Lokasi dan Pola Keruangan "," Studio Proses Perencanaan "," Perencanaan Tapak "," Metode Analisis Perencanaan "," Permodelan dalam Perencanaan "," Perencanaan dan Pembiayaan Pembangunan "," Perencanaan Kota"],
  4: ["Metode dan Teknik Perencanaan Perumahan Permukiman", "Perancangan Kota, Studio Perencanaan Kota", "Pembiayaan Pembangunan Perumahan", "Hukum Administrasi Perencanaan"," Manajemen Perkotaan", "Perencanaan Wilayah", "Metode Penelitian", "Pancasila"],
  5: ["has not yet passed"],
  6: ["has not yet passed"],
  7: ["has not yet passed"],
  8: ["has not yet passed"],
  // ... masa mau nambah XD
};

const SemesterContainer = styled.div`
  margin: 20px;
  color: #fff;
`;

const CourseList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin: 20px 0;
  text-decoration: none;
  color: #61dafb;
  font-size: 1.2em;
  border: 1px solid #61dafb;
  border-radius: 5px;
  padding: 10px 20px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #61dafb;
    color: #1a1a1a;
  }
`;

function Semester({ onBack }) {
  const { id } = useParams();
  const courses = semesters[id] || [];

  return (   // ... bisa di tambahkan di bawah <SemesterContainer> dengan code berikut <h2>Semester {id}</h2>
    <SemesterContainer>

      <CourseList>
        {courses.map((course, index) => (
          <Course key={index} name={course} />
        ))}
      </CourseList>
      <BackLink to="/" onClick={onBack}>Kembali</BackLink>
    </SemesterContainer>
  );
}

export default Semester;