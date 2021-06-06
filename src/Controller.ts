/* state controller */

let instance: Controller;

export class Controller {

    private state: Map<any, any>;

    static get instance(): Controller {
        return instance ? instance : instance = new Controller();
    }

    constructor() {
        this.state = new Map<any, any>();
        this.state.set("subscribers", new Array<any>());
    }


    public getState(): Map<any, any> {
        return this.state;
    }

    public editState(prop: any, value: any) {
        this.state.set(prop, value);
        this.checkSubscribers();
    }


    public checkSubscribers() {
        for (let component of this.state.get("subscribers")) {
            if (typeof component.subscribedFunction === 'function') {
                component.subscribedFunction(this.state);
            }
        }
    }

    public subscribe(component: any) {
        if (!this.state.get("subscribers").includes(component)) {
            this.state.get("subscribers").push(component);
        }
    }

    public unsubscribe(component: any) {
        if (this.state.get("subscribers").includes(component)) {
            this.state.get("subscribers").splice(this.state.get("subscribers").indexOf(component), 1);
        }
    }
}