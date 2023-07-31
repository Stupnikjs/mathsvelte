import * as THREE from "three"

export function createLabelSprite(text: string) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const fontSize = 30;
    const padding = 6;

    if (context){
        context.font = `${fontSize}px Arial`;
        const textWidth = context.measureText(text).width;
    
        canvas.width = textWidth + padding * 5;
        canvas.height = fontSize + padding * 5;
    
        context.font = `${fontSize}px Arial`;
        context.textAlign = 'center';
        context.textBaseline = 'middle';
    
        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, canvas.width, canvas.height);
    
        context.fillStyle = '#000000';
        context.fillText(text, canvas.width / 2, canvas.height / 2);
    
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture });

    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(0.5, 0.25, 1); // Adjust the size of the sprite
    sprite.center.set(0.5, 0.5); // Center the sprite

    return sprite;
  }