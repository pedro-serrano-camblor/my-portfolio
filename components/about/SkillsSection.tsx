'use client';

import { Skill } from '@/types';
import { motion } from 'framer-motion';

interface SkillsSectionProps {
  skills: Skill[];
}

/**
 * Componente para mostrar habilidades técnicas
 * Agrupa habilidades por categoría
 */
export default function SkillsSection({ skills }: SkillsSectionProps) {
  // Agrupar habilidades por categoría
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.category || 'Otros';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div className="space-y-8">
      {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
        >
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            {category}
          </h3>
          <div className="flex flex-wrap gap-3">
            {categorySkills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 transition-colors"
              >
                {skill.icon && (
                  <span className="text-lg">{skill.icon}</span>
                )}
                <span>{skill.name}</span>
                {skill.level && (
                  <span className="text-xs text-slate-500">
                    ({skill.level})
                  </span>
                )}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

