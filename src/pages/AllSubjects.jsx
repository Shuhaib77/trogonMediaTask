import React from "react";
import ExploreSubject from "../components/home./ExploreSubject";
import Header from "../components/Header";

function AllSubjects() {
  return (
    <>
      <div>
        <Header heading={"CHAPTER"} />
      </div>
      <div>
        <ExploreSubject />
      </div>
    </>
  );
}

export default AllSubjects;
