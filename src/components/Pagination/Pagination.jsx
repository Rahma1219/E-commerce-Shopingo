import modules from './Pagination.module.css'

function Pagination({NbPage,setCurrent}){
    return(
        <div className={modules.number}>
        {Array.from({length: NbPage},( _,i ) => i + 1 ).map(page =>{
            return(
                <>
                <button onClick={() => setCurrent(page)} className={modules.num}>{page}</button>
          
                </>
           
            

            )
        })}
           
    </div>

    )
}
export default Pagination