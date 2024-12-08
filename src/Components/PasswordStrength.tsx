import React from "react";

interface PasswordStrengthProps {
  password: string;
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
  const calculateStrength = (pwd: string): number => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (pwd.match(/[a-z]/)) strength++;
    if (pwd.match(/[A-Z]/)) strength++;
    if (pwd.match(/[0-9]/)) strength++;
    if (pwd.match(/[^a-zA-Z0-9]/)) strength++;
    return strength;
  };

  const strength = calculateStrength(password);
  const getStrengthText = () => {
    if (!password) return "";
    if (strength <= 2) return "Weak";
    if (strength <= 3) return "Medium";
    return "Strong";
  };

  return (
    <div className="password-strength" role="alert" aria-live="polite">
      {password && (
        <>
          <div className="strength-bars">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`strength-bar ${index < strength ? "filled" : ""}`}
              />
            ))}
          </div>
          <span>{getStrengthText()}</span>
        </>
      )}
    </div>
  );
};

export default PasswordStrength;
