import React from "react";
import { Link } from "react-router-dom";

interface CardSectionProps {
  title: string;
  description: string;
  link: string;
}

const CardSection: React.FC<CardSectionProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-center border border-gray-100">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <Link
        to={link}
        className="inline-block mt-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200"
      >
        Learn More
      </Link>
    </div>
  );
};

export default CardSection;
