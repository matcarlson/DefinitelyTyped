import Disposable from '../Disposable';
import Polygon from '../geom/Polygon';
import { Pixel } from '../pixel';
import PluggableMap from '../PluggableMap';

export default class RenderBox extends Disposable {
    constructor(className: string);
    /**
     * Creates or updates the cached geometry.
     */
    createOrUpdateGeometry(): void;
    /**
     * Clean up.
     */
    disposeInternal(): void;
    getGeometry(): Polygon;
    setMap(map: PluggableMap): void;
    setPixels(startPixel: Pixel, endPixel: Pixel): void;
}
