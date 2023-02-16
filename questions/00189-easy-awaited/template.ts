type MyAwaited<T> = T extends PromiseLike<infer S> ? MyAwaited<S> : T;
