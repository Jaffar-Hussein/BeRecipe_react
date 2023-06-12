import '../css/Home.css'
function CallAction() {
    return (
        <div className="bg-callAction h-[20vh] bg-cover callAction">
            <div className="action-call py-5">
                <p className='text-white text-2xl text-center'>Calling All Culinary Enthusiasts: <br></br>
                    Share Your Flavorful Creations with <br></br> the World!</p>
                <div className='flex justify-center'>
                    <button className="rounded-none bg-white p-3 mt-3 text-greenPaste tracking-widest">Save Changes</button>

                </div>
            </div>

        </div>
    )
}
export default CallAction;