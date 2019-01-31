export class TestService{
    getData():Observable<any>{
        return Observable.create((obs) => { 
            
            var data = {
                id: 1
            }
            obs.next(data);
            obs.complete(); 
        });
    }
}