/*
  DISCRETE MATHEMATICS PORTAL — LESSON REGISTRY
  ------------------------------------------------
  To add a new lesson:
  1. Upload the new .html file into this same folder.
  2. Copy one lesson object below.
  3. Change id, title, category, type, description, icon, file, and search.
  4. Commit the changes to GitHub.
  GitHub Pages will update the same website URL automatically.

  category must be one of:
  "logic", "relations", "sets", "functions", "posets", "lattices", "quiz", "other"

  type examples:
  "Interactive Lesson", "Lesson + Quiz", "Quiz", "Practice"
*/
window.DM_LESSONS = [
  {
    id: "logic",
    title: "Propositional & Conditional Logic",
    category: "logic",
    type: "Interactive Lesson",
    description: "Interactive slide-based teaching material covering propositions, logical connectives and conditional logic.",
    icon: "🔷",
    file: "logic-interactive.html",
    search: "propositional conditional logic interactive slides lesson connectives"
  },
  {
    id: "relations",
    title: "Sets & Relations",
    category: "relations",
    type: "Interactive Lesson",
    description: "Explore sets, relations, properties and representations including matrices and directed graphs.",
    icon: "🔗",
    file: "sets-relations.html",
    search: "sets relations definition types properties digraph matrix directed graph"
  },
  {
    id: "negation",
    title: "Negation of Compound Statements",
    category: "logic",
    type: "Lesson + Quiz",
    description: "Learn and practise negation rules for compound statements, including conjunctions, disjunctions, conditionals and biconditionals.",
    icon: "¬",
    file: "negation-quiz.html",
    search: "negation compound statements de morgan conditional biconditional"
  },
  {
    id: "logicquiz",
    title: "Propositional Logic Quiz",
    category: "quiz",
    type: "Quiz",
    description: "Practice conditional statements, converse, inverse, contrapositive and logical equivalence.",
    icon: "🧠",
    file: "logic-quiz.html",
    search: "propositional logic conditional converse inverse contrapositive quiz equivalence"
  },
  {
    id: "negationquiz",
    title: "Negation Practice",
    category: "quiz",
    type: "Practice",
    description: "Check your understanding of De Morgan's laws, double negation and negation of conditional and biconditional statements.",
    icon: "✍️",
    file: "negation-quiz.html",
    search: "negation quiz de morgan double negation conditional biconditional practice"
  }
];
