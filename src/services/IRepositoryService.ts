import { Model } from 'objection'

export type Constructor<T = {}> = new (...args: any[]) => T

export function Scale<T extends Constructor<Model>> (Base: T) {
  return class extends Base {}
}
