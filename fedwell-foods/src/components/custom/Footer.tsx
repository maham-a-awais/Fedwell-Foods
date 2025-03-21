export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Fedwell Foods. All rights reserved.
        </p>

        <div className="flex justify-center space-x-4 mt-2" />
      </div>
    </footer>
  );
}
