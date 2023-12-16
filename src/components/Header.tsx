import { Button } from '@mui/material';

const Header = () => {
  return (
    <div>
      <nav className="bg-white py-4 px-8 flex justify-between items-center border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <img
            alt="logo"
            className="h-10"
            height="40"
            src="/placeholder.svg"
            style={{
              aspectRatio: '120/40',
              objectFit: 'cover',
            }}
            width="120"
          />
          <div className="hidden md:flex space-x-4">
            <a className="text-gray-700 hover:text-gray-900" href="#">
              Home
            </a>
            <a className="text-gray-700 hover:text-gray-900" href="#">
              My Books
            </a>
            <div className="relative">
              <button className="text-gray-700 hover:text-gray-900">
                Browse
              </button>
            </div>
            <a className="text-gray-700 hover:text-gray-900" href="#">
              Community
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-gray-100 rounded-md overflow-hidden">
            {/* <SearchIcon className="text-gray-500 mx-3" /> */}
            <input
              className="py-2 px-3 bg-transparent focus:outline-none"
              placeholder="Search books"
              type="text"
            />
          </div>
          <a className="text-gray-700 hover:text-gray-900" href="#">
            Sign In
          </a>
          <Button className="bg-green-600 text-white">Join</Button>
        </div>
      </nav>
      <div className="relative">
        <img
          alt="Goodreads Choice Awards banner"
          className="w-full h-[400px] object-cover"
          height="400"
          src="/placeholder.svg"
          style={{
            aspectRatio: '1902/400',
            objectFit: 'cover',
          }}
          width="1902"
        />
      </div>
    </div>
  );
};

export default Header;
