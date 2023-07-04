import CourseSubjectCard from "./CourseSubjectCard";

function CourseSubjectSection() {
  return (
    <section id="courseSubjectSection">
      <CourseSubjectCard
        imgLink={"./assets/images/fields_images/francais.png"}
        alt="Photo du cours de francais"
        title="Photo du cours de francais"
        color="#C2A3FF"
        subject="Francais"
      />
      <CourseSubjectCard
        imgLink={"./assets/images/fields_images/anglais.png"}
        alt="Photo du cours d'anglais"
        title="Photo du cours d'anglais"
        color="#FED37C"
        subject="Anglais"
      />
      <CourseSubjectCard
        imgLink={"./assets/images/fields_images/mathematiques.png"}
        alt="Photo du cours de mathématiques"
        title="Photo du cours de mathématiques"
        color="#7C95CF"
        subject="Maths"
      />
      <CourseSubjectCard
        imgLink={"./assets/images/fields_images/physique.png"}
        alt="Photo du cours de physique"
        title="Photo du cours de physique"
        color="#B5DB88"
        subject="Physique"
      />
      <CourseSubjectCard
        imgLink={"./assets/images/fields_images/informatique.png"}
        alt="Photo du cours d'informatique"
        title="Photo du cours d'informatique"
        color="#9CE4FD"
        subject="Info"
      />
      <CourseSubjectCard
        imgLink={"./assets/images/fields_images/medecine.png"}
        alt="Photo du cours de médecine"
        title="Photo du cours de médecine"
        color="#FEA199"
        subject="Médecine"
      />
    </section>
  );
}

export default CourseSubjectSection;
