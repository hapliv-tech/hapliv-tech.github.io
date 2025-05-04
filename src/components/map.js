export default function Map({location_address, height}) {
    return (<>
        <section className="page-section" id="location">
            <div className='w-full p-8'>
                <iframe src={location_address}
                    className="w-full" height={height?height:'450'} allowFullScreen="" loading="lazy">
                </iframe>
            </div>
            <div>
            </div>
        </section>
    </>);
}