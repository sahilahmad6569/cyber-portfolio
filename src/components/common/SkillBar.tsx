import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  category: string;
}

// Define allowed categories
type Category = 'security' | 'programming' | 'devops' | 'default';

// Define the type of color mapping
type CategoryColor = {
  text: string;
  bg: string;
};

// Tailwind-safe color mapping
const categoryColors: Record<Category, CategoryColor> = {
  security: {
    text: 'text-neon-green',
    bg: 'bg-neon-green',
  },
  programming: {
    text: 'text-neon-blue',
    bg: 'bg-neon-blue',
  },
  devops: {
    text: 'text-neon-purple',
    bg: 'bg-neon-purple',
  },
  default: {
    text: 'text-neon-green',
    bg: 'bg-neon-green',
  },
};

const SkillBar: React.FC<SkillBarProps> = ({ name, level, category }) => {
  const lowerCategory = category.toLowerCase() as Category;
  const colors = categoryColors[lowerCategory] || categoryColors.default;

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="font-mono text-sm text-gray-300">{name}</span>
        <span className={`font-mono text-xs ${colors.text}`}>{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-terminal-gray rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${colors.bg}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
