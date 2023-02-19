import { Link } from 'react-router-dom';
function NavbarSmile() {
    return (
        <div class="position-absolute bottom-0 start-50 translate-middle-x" style={{ width: "100%", height: "10vh", backgroundColor: "white", boxShadow: "0px -5px 10px rgba(221, 83, 83, 0.15)" }}>
            <nav class="navbar bg-body-tertiary">
                <div className="container-fluid d-flex flex-row">
                {/* <Link to="/maps"> */}
                    <iconify-icon icon="material-symbols:location-on-outline-sharp" width="40"></iconify-icon>
                {/* </Link> */}
                    <iconify-icon icon="material-symbols:home-outline-sharp" width="40"></iconify-icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#DD5353" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                    </svg>
                    <iconify-icon icon="mdi:message-processing-outline" width="40"></iconify-icon>
                    <iconify-icon icon="gg:profile" width="40"></iconify-icon>
                </div>
            </nav>
        </div>
    );
}
export default NavbarSmile;
