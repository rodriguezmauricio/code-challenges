/* Challenge #54: Implement a Basic Promise
Difficulty: 🔴 Hard
Points: 30

Task: Write a class MyPromise that mimics the basic behavior of a native JavaScript Promise. It should:

Accept a function with resolve and reject as arguments.
Have a then method that executes a callback when the promise resolves.
Have a catch method that executes a callback when the promise rejects.
Requirements
Define a class called MyPromise.
The constructor should accept a function with resolve and reject.
Implement the then and catch methods. */

class MyPromise {
    private state: "pending" | "resolved" | "rejected" = "pending";
    private value: any = undefined;
    private thenCallback: ((value: any) => void) | null = null;
    private catchCallback: ((error: any) => void) | null = null;

    constructor(executor: (resolve: (value: any) => void, reject: (reason: any) => void) => void) {
        const resolve = (value: any) => {
            if (this.state === "pending") {
                this.state = "resolved";
                this.value = value;
                setTimeout(() => this.thenCallback?.(value), 0); // Defer execution
            }
        };

        const reject = (reason: any) => {
            if (this.state === "pending") {
                this.state = "rejected";
                this.value = reason;
                setTimeout(() => this.catchCallback?.(reason), 0); // Defer execution
            }
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(callback: (value: any) => void): MyPromise {
        this.thenCallback = callback;
        if (this.state === "resolved") {
            setTimeout(() => this.thenCallback?.(this.value), 0);
        }
        return this;
    }

    catch(callback: (reason: any) => void): MyPromise {
        this.catchCallback = callback;
        if (this.state === "rejected") {
            setTimeout(() => this.catchCallback?.(this.value), 0);
        }
        return this;
    }
}
