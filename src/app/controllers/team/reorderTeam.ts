export default async function reorderTeam(_id: string, direction: string){
    if(direction == "up" || direction == "down"){
        try{
            await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/team/reorder/${direction}`, {
                method: "POST",
                body: JSON.stringify({_id: _id})
            })
            return Promise.resolve()
        }catch(err: any){
            console.error(err.message);
            return Promise.reject();
        }
    }
}