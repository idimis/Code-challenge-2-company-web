// src/@types/three-examples.d.ts

declare module 'three/examples/jsm/loaders/GLTFLoader' {
    import { Loader } from 'three';
    export class GLTFLoader extends Loader {
        load(
            url: string, 
            onLoad: (gltf: any) => void, 
            onProgress?: (event: ProgressEvent) => void, 
            onError?: (error: Error) => void
        ): void;
    }
}

declare module 'three/examples/jsm/controls/OrbitControls' {
    import { Camera, Event } from 'three';
    import { OrbitControls as OrbitControlsBase } from 'three/examples/jsm/controls/OrbitControls';

    export class OrbitControls extends OrbitControlsBase {
        constructor(camera: Camera, domElement: HTMLElement);
        update(): void;
        dispose(): void;
    }
}
