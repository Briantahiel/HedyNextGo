import Link from 'next/link'
import styled from 'styled-components'
import DarkModeBtn from '../ui/button'

const Wrapper = styled.nav`
  padding: 5px;
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 1);
  background-color: #17202a;
`
const Navbar = styled.div`
  position: relative;
  text-align: right;
  top: 8px;
`
const MenuToggle = styled.input.attrs({ type: 'checkbox', id: 'menu' })`
  display: none;
`

const MenuLabel = styled.label.attrs({ htmlFor: 'menu' })`
  box-sizing: border-box;
  display: inline-block;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  user-select: none;
  cursor: pointer;
  background: whitesmoke;
  color: #333;
`

const NavMenu = styled.ul`
  margin-top: 0;
  padding: 0;
  width: 200px;
  display: none;

  input:checked ~ & {
    display: block;
  }
`

const NavItem = styled.li`
  display: block;
  margin: 0;
  padding: 10px;
  list-style: none;

  &:hover {
    filter: brightness(110%);
  }
`

const NavLink = styled.a`
  cursor: pointer;
  color: whitesmoke;
  font-weight: 600;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: #666;
  }
`

const Logo = styled.span`
  position: relative;
  bottom: 15px;
  left: 15px;
  font-weight: 600;
  color: whitesmoke;
`

const Nav = () => (
  <Wrapper>
    <MenuToggle id='menu' />
    <Navbar>
      <MenuLabel htmlFor='menu'>☰</MenuLabel>
      <DarkModeBtn
        onClick={() => {
          document.body.classList.toggle('dark')
        }}
      >
        Dark Mode
      </DarkModeBtn>
      <style jsx global>{`
        body.dark {
          background-color: #333;
          color: whitesmoke;
        }
      `}</style>
    </Navbar>
    <Link href='/'>
      <NavLink>
        <Logo>Hedy</Logo>
      </NavLink>
    </Link>

    <NavMenu>
      <NavItem>
        <Link href='/'>
          <NavLink>Home</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href='/blogs'>
          <NavLink>Blogs</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href='/about' prefetch>
          <NavLink>About</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href='/users' prefetch>
          <NavLink>Users</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href='/contact' prefetch>
          <NavLink>Contact</NavLink>
        </Link>
      </NavItem>
    </NavMenu>
  </Wrapper>
)

export default Nav
