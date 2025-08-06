import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ActionButtonProps {
  children: React.ReactNode;
  page?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  page,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  fullWidth = false,
  disabled = false,
  icon,
  iconPosition = "left",
}) => {
  // Base classes
  const baseClasses =
    "rounded-xl font-medium uppercase transition-colors duration-200 flex items-center justify-center gap-2";

  // Variant classes
  const variantClasses = {
    primary: "bg-primary hover:bg-primary-dark text-white shadow-md",
    secondary: "bg-secondary hover:bg-secondary-dark text-white shadow-md",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
    ghost: "text-primary hover:bg-primary/10",
  };

  // Size classes
  const sizeClasses = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-6 text-base",
    lg: "py-3 px-8 text-lg",
  };

  // Full width class
  const widthClass = fullWidth ? "w-full" : "";

  // Disabled state
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  // Combined classes
  const buttonClasses = `cursor-pointer ${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClasses} ${className}`;

  // Animation props
  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.05 },
    whileTap: disabled ? {} : { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 10 },
  };

  // Content with optional icon
  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </>
  );

  // Render as Link or button
  if (page) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link to={page} className={buttonClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {content}
    </motion.button>
  );
};

export default ActionButton;
