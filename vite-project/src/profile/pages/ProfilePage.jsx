import React, { useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import MainBody from "../components/MainBody";

const ProfilePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <ProfileHeader
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <MainBody selectedCategory={selectedCategory} searchTerm={searchTerm} />
    </>
  );
};

export default ProfilePage;
