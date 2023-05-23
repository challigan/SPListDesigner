function NavButton({ name, activeForm, setActiveForm }) {
    const handleClick = () => setActiveForm(name);

    return (
        <button onClick={handleClick} style={{ backgroundColor: activeForm === name ? 'blue' : 'grey' }}>
            {name}
        </button>
    );
}

export default NavButton;
