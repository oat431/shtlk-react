function NavBar(){
    return (
        <div className="navbar bg-base-300 shadow-sm">
            <a className="btn btn-ghost text-xl">Panomete Short Link</a>
            <div className="ml-auto mr-4">
                <span className="badge badge-lg badge-info">API Status: Waiting</span>
            </div>
        </div>
    )
}

export default NavBar