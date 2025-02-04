import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className="w-full h-36 md:h-40 xl:h-44 flex flex-col gap-4 items-center justify-center">
      <Link to={"/users"} className='flex items-center gap-6 text-2xl font-bold'>
        <img src='/books.png' className='w-16 h-16' alt='Books Logo' />
        <span>Library System</span>
      </Link>

      <div className='flex items-center gap-8 xl:gap-12 text-lg font-bold'>
        <Link to={"/users"}>Users</Link>
        <Link to={"/books"}>Books</Link>
      </div>
    </div >
  )
}

export default Navbar