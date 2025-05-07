import { Link } from "wouter";

// Важно: используем полный путь к изображению
const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center cursor-pointer">
        <img 
          src="/src/assets/logo.png" 
          alt="TF Logo" 
          className="h-9" 
          onError={(e) => {
            // Если изображение не загрузилось, показываем резервный текст
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentNode as HTMLElement;
            if (parent) {
              const backupElement = document.createElement('div');
              backupElement.className = 'text-purple-700 font-bold text-xl';
              backupElement.textContent = 'TF';
              parent.appendChild(backupElement);
            }
          }}
        />
      </div>
    </Link>
  );
};

export default Logo;
