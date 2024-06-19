import { Home,Calendar } from 'lucide-react';
const Menu = () => {
  return (
    <ul>
      <li><a href="/" className="flex gap-1"><Home/>Inicio</a></li>
      <li><a href="#" className="flex gap-1"><Calendar/>Calendario</a></li>
      <li><a href="#" className="flex gap-1"></a></li>
      <li><a href="#" className="flex gap-1"></a></li>
      <li><a href="#" className="flex gap-1"></a></li>
    </ul>
  )
}

export default Menu