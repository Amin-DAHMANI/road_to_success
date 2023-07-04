function CourseSubjectCard({ imgLink, alt, title, color, subject }) {
  return (
    <div className="borderCourseSubjectCard">
      <section className="courseSubjectCard">
        <img src={imgLink} alt={alt} title={title} />
        <h3
          className="titleCourseSubjectCard"
          style={{ backgroundColor: color }}
        >
          {subject}
        </h3>
      </section>
    </div>
  );
}

export default CourseSubjectCard;
