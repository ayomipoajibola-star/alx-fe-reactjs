function Header() {
    return (
        <div style={{ border: '1px solid gray', padding: '15px', margin: '15px', borderRadius: '10px', backgroundColor: '#f5f5f5' }}>
            <h2 style={{ color: 'blue', fontSize: '24px' }}>{props.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
            <p>Bio: {props.bio}</p>
            <header style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center', padding: '20px' }}>
  <h1>My Favorite Cities</h1>
</header>
        </div>
    );
}

export default Header;
