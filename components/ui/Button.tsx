import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-rave-base disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    // Neon Green Button with Dark Text
    primary: "bg-strive-500 hover:bg-white text-rave-base shadow-[0_0_20px_rgba(97,242,92,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] focus:ring-strive-500",
    // Dark Surface Button
    secondary: "bg-rave-surface hover:bg-rave-highlight text-white shadow-md focus:ring-slate-500",
    // Outline Button
    outline: "border-2 border-rave-surface hover:border-strive-500 hover:text-strive-500 text-slate-300 bg-transparent focus:ring-strive-500",
    // Ghost Button
    ghost: "text-slate-400 hover:text-strive-500 hover:bg-rave-surface focus:ring-strive-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;