export default async function createTeamMember(data: teamMemberType){
    try{
        await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/team`, {
            method: "POST",
            body: JSON.stringify(data)
        })
        return Promise.resolve()
    }catch(err: any){
        console.error(err.message);
        return Promise.reject();
    }
}