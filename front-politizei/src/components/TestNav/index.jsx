export const NavTest = () => {
    
    document.addEventListener("DOMContentLoaded", function(){
        // make it as accordion for smaller screens
        if (window.innerWidth > 992) {
        
            document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
        
                everyitem.addEventListener('mouseover', function(e){
        
                    let el_link = this.querySelector('a[data-bs-toggle]');
        
                    if(el_link != null){
                        let nextEl = el_link.nextElementSibling;
                        el_link.classList.add('show');
                        nextEl.classList.add('show');
                    }
        
                });
                everyitem.addEventListener('mouseleave', function(e){
                    let el_link = this.querySelector('a[data-bs-toggle]');
        
                    if(el_link != null){
                        let nextEl = el_link.nextElementSibling;
                        el_link.classList.remove('show');
                        nextEl.classList.remove('show');
                    }
        
        
                })
            });
        
        }
        // end if innerWidth
        }); 
        // DOMContentLoaded  end
    return(
        <>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Brand</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main_nav">
                <ul className="navbar-nav">
                    <li className="nav-item active"> <a className="nav-link" href="#">Home </a> </li>
                    <li className="nav-item"><a className="nav-link" href="#"> About </a></li>
                    <li className="nav-item"><a className="nav-link" href="#"> Services </a></li>
                    <li className="nav-item dropdown">
                    <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  Hover me  </a>
                        <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
                        <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                        <li><a className="dropdown-item" href="#"> Submenu item 3 </a></li>
                        </ul>
                    </li>
                </ul>
            </div> 
            </div>
            </nav>
        </>
    )
}