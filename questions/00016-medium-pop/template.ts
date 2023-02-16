type Pop<T extends any[]> = T extends [...infer L, any] ? L : []
