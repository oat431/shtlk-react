// <template>
//     <footer class="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
//         <aside>
//             <p>Copyright © 2026 - All right reserved by Sahachan Tippimwong</p>
//         </aside>
//     </footer>
// </template>

function Footer(){
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Sahachan Tippimwong</p>
            </aside>
        </footer>
    )
}

export default Footer