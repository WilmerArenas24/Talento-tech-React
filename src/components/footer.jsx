export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-4 fixed bottom-0 w-full">
        <div className="container mx-auto">
          <p className="text-center">&copy; {new Date().getFullYear()} Proyecto TalentoTech</p>
          <p className="text-center">Desarrollado por Wilmer Arenas</p>
        </div>
      </footer>
    );
  }
  