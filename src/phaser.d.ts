import type Phaser from "phaser";

export interface GameObject {
  type: string; // TODO: Enum type?
  x: number;
  y: number;
  w: number;
  h: number;
  activated: boolean;
}

export interface Streak {
  _color: number;
  _opacity: number;
  _fadeDelta: number;
  _minSegSq: number;
  _maxSeg: number;
  _maxPoints: number;
  _stroke: number;
  _pts: { x: number; y: number; state: number }[];
  _posR: { x: number; y: number };
  _posInit: boolean;
  _active: boolean;
  _gfx: Phaser.GameObjects.Graphics;
}

export enum ColorId {
  Background = 1000,
  Ground = 1001,
}

export interface Color {
  r: number;
  g: number;
  b: number;
}

export interface ColorTransition {
  from: Color;
  to: Color;
  duration: number;
  elapsed: number;
  done: boolean;
  current: Color;

  step: (delta: number) => void;
}

export interface ColorManager {
  _colors: Record<ColorId, Color>;
  _actions: Record<ColorId, ColorTransition>;

  reset: () => void;
  triggerColor: (
    colorId: ColorId,
    targetColor: Color,
    duration: number,
  ) => void;
  step: (delta: number) => void;
  getColor: (colorId: ColorId) => Color;
  getHex: (colorId: ColorId) => number;
}

export interface Player {
  _flyParticle2Active: boolean;
  _flyParticle2Emitter: Phaser.GameObjects.Particles.ParticleEmitter;
  _flyParticleActive: boolean;
  _flyParticleEmitter: Phaser.GameObjects.Particles.ParticleEmitter;
  _gameLayer: typeof window.gdScene._level;
  _landEmitter1: Phaser.GameObjects.Particles.ParticleEmitter;
  _landEmitter2: Phaser.GameObjects.Particles.ParticleEmitter;
  _landIdx: boolean;
  _lastCameraX: number;
  _lastCameraY: number;
  _lastLandObject: null | GameObject;
  _lastXOffset: number;
  _particleActive: boolean;
  _particleEmitter: Phaser.GameObjects.Particles.ParticleEmitter;
  _playerExtraLayer: null;
  _playerGlowLayer: { sprite: Phaser.GameObjects.Image };
  _playerLayers: ({ sprite: Phaser.GameObjects.Image } | null)[];
  _playerOverlayLayer: { sprite: Phaser.GameObjects.Image };
  _playerSpriteLayer: { sprite: Phaser.GameObjects.Image };
  _rotation: number;
  _scene: typeof window.gdScene;
  _shipDragActive: boolean;
  _shipDragEmitter: Phaser.GameObjects.Particles.ParticleEmitter;
  _shipExtraLayer: null;
  _shipGlowLayer: { sprite: Phaser.GameObjects.Image };
  _shipLayers: ({ sprite: Phaser.GameObjects.Image } | null)[];
  _shipOverlayLayer: { sprite: Phaser.GameObjects.Image };
  _shipSpriteLayer: { sprite: Phaser.GameObjects.Image };
  _showHitboxes: boolean;
  _streak: Streak;
  p: typeof window.gdScene._state;
  playerSprite: Phaser.GameObjects.Image;
  rotateActionActive: boolean;
  rotateActionDuration: number;
  rotateActionStart: number;
  rotateActionTime: number;
  rotateActionTotal: number;
  shipSprite: Phaser.GameObjects.Image;
  killPlayer: () => void;
  reset: () => void;
  enterShipMode: (portal: GameObject) => void;
  exitShipMode: () => void;
  drawHitboxes: (
    graphics: Phaser.GameObjects.Graphics,
    cameraX: number,
    cameraY: number,
  ) => void;
  syncSprites: (
    cameraX: number,
    cameraY: number,
    delta: number,
    screenX: number,
  ) => void;
  checkCollisions: (cameraX: number) => void;
  hitGround: () => void;
  runRotateAction: () => void;
  flipMod: () => -1 | 1;
  _createSprites: () => void;
  _initParticles: (scene: Phaser.Scene) => void;
  _updateParticles: (cameraX: number, cameraY: number, delta: number) => void;
  setCubeVisible: (visible: boolean) => void;
  setShipVisible: (visible: boolean) => void;
  _createExplosionPieces: (
    centerX: number,
    centerY: number,
    scale: number,
  ) => void;
  updateExplosionPieces: (delta: number) => void;
  _cleanupExplosion: () => void;
  _playPortalShine: (object: GameObject) => void;
  _checkSnapJump: (object: GameObject) => void;
  _isFallingPastThreshold: () => boolean;
  stopRotation: () => void;
  updateRotationAction: (delta: number) => void;
  convertToClosestRotation: () => number;
  slerp2D: (from: number, to: number, t: number) => number;
  updateGroundRotation: (delta: number) => void;
  updateShipRotation: (delta: number) => void;
  playerIsFalling: () => boolean;
  updateJump: (delta: number) => void;
  _updateFlyJump: (delta: number) => void;
  setShowHitboxes: (value: boolean) => void;
  playEndAnimation: (
    endX: number,
    onComplete: () => void,
    portalY?: number,
  ) => void;
}

declare global {
  interface Window {
    Phaser: typeof Phaser;
    gdGame: Phaser.Game;
    gdScene: Phaser.Scene & {
      _applyScreenResize: () => void;
      _attempts: number;
      _attemptsLabel: Phaser.GameObjects.Text;
      _bestPercent: number;
      _bg: Phaser.GameObjects.Image;
      _bgInitY: number;
      _bgSpeedX: number;
      _bgSpeedY: number;
      _player: Player;
      _fpsText: Phaser.GameObjects.Text;
      _buildHud: () => void;
      _buildInfoPopup: () => void;
      _buildPauseOverlay: () => void;
      _cameraX: number;
      _cameraXRef: { _v: number };
      _cameraY: number;
      _closeInfoPopup: () => void;
      _colorManager: ColorManager;
      _copyrightText: Phaser.GameObjects.Text;
      _deathSoundPlayed: boolean;
      _deathTimer: number;
      _deltaBuffer: number;
      _downloadButtons: Phaser.GameObjects.Image[];
      _drawScale9: (
        x: number,
        y: number,
        width: number,
        height: number,
        textureKey: string,
        cornerSize: number,
        tint?: number,
        alpha?: number,
      ) => Phaser.GameObjects.Container;
      _endCameraOverride: boolean;
      _endCamTween?: null; // TODO: type when not null
      _endPortalGameY: number;
      _escKey: Phaser.Input.Keyboard.Key;
      _expandHitArea: (image: Phaser.GameObjects.Image, mul: number) => void;
      _firstPlay: boolean;
      _fpsAccum: number;
      _fpsFrames: number;
      _glitterCenterX: number;
      _glitterCenterY: number;
      _glitterEmitter: Phaser.GameObjects.Particles.ParticleEmitter;
      _hadNewBest: boolean;
      _hideEndLayer: (cb: () => void) => void;
      _hooked: true;
      _lastPercent: number;
      _level: {
        _spawnLevelObjects: (objects: any[]) => void; // TODO: object type
        loadLevel: (levelstring: string) => void;
        _activeEnterEffect: number;
        _activeExitEffect: number;
        _audioScaleSprites: Phaser.GameObjects.Image[];
        _cameraXRef: { _v: number };
        _ceilingLine: Phaser.GameObjects.Image;
        _ceilingShadowL: Phaser.GameObjects.Image;
        _ceilingShadowR: Phaser.GameObjects.Image;
        _ceilingStartScreenY: number;
        _ceilingTiles: Phaser.GameObjects.Image[];
        _ceilingY: number | null;
        _collisionSections: GameObject[][];
        _colorTriggerIdx: number;
        _colorTriggers: {
          x: number;
          index: number;
          duration: number;
          tintGround: boolean;
          color: { r: number; g: number; b: number };
        }[];
        _endPortalContainer: Phaser.GameObjects.Container;
        _endPortalEmitter: Phaser.GameObjects.Particles.ParticleEmitter;
        _endPortalGameY: number;
        _endPortalShine: Phaser.GameObjects.Image;
        _enterEffectTriggerIdx: number;
        _enterEffectTriggers: { x: number; effect: number }[];
        _flyCeilingY: number;
        _flyFloorY: number;
        _flyGroundActive: boolean;
        _groundAnimDuration: number;
        _groundAnimFrom: number;
        _groundAnimTime: number;
        _groundAnimTo: number;
        _groundAnimating: boolean;
        _groundLine: Phaser.GameObjects.Image;
        _groundShadowL: Phaser.GameObjects.Image;
        _groundShadowR: Phaser.GameObjects.Image;
        _groundStartScreenY: number;
        _groundTargetValue: number;
        _groundTiles: Phaser.GameObjects.Image[];
        _groundY: number;
        _lastObjectX: number;
        _maxGroundWorldX: number;
        _nearbyBuffer: GameObject[];
        _scene: typeof window.gdScene;
        _sectionContainers: {
          additive: Phaser.GameObjects.Container;
          normal: Phaser.GameObjects.Container;
        }[];
        _sections: Phaser.GameObjects.Image[][];
        _tileW: number;
        _visMaxSec: number;
        _visMinSec: number;
        additiveContainer: Phaser.GameObjects.Container;
        container: Phaser.GameObjects.Container;
        endXPos: number;
        flyCameraTarget: null | number;
        objects: GameObject[];
        topContainer: Phaser.GameObjects.Container;
        getNearbySectionObjects: (worldX: number) => GameObject[];
        checkEnterEffectTriggers: (playerX: number) => void;
        resetEnterEffectTriggers: () => void;
        applyEnterEffects: (cameraX: number) => void;
        setGroundColor: (tint: number) => void;
        updateAudioScale: (scale: number) => void;
        resetVisibility: () => void;
        resetObjects: () => void;
        updateVisibility: (cameraX: number) => void;
        _addToSection: (sprite: Phaser.GameObjects.Image) => void;
        _addVisualSprite: (
          sprite: Phaser.GameObjects.Image,
          flaggedDefinition: any,
        ) => void; // TODO: object definiton type
        _applyVisualProps: (
          scene: typeof window.gdScene,
          sprite: Phaser.GameObjects.Image,
          frame: string,
          object: any,
          definition: any,
        ) => void; // TODO: missing arg types
        _addCollisionToSection: (object: GameObject) => void;
      };
      _levelComplete: () => void;
      _levelWon: boolean;
      _logo: Phaser.GameObjects.Image;
      _makeBouncyButton: <T extends Phaser.GameObjects.Image>(
        image: T,
        baseScale: number,
        onClick: () => void,
        isActiveCheck?: () => boolean,
      ) => T;
      _menuActive: boolean;
      _menuCameraX: number;
      _menuFsBtn: Phaser.GameObjects.Image;
      _menuGlitter: Phaser.GameObjects.Particles.ParticleEmitter;
      _menuInfoBtn: Phaser.GameObjects.Image;
      _newBestShown: boolean;
      _onFullscreenChange: (fullscreen: boolean) => void;
      _pauseBtn: Phaser.GameObjects.Image;
      _pauseContainer: null | Phaser.GameObjects.Container;
      _paused: boolean;
      _pauseGame: () => void;
      _playBtn: Phaser.GameObjects.Image;
      _playBtnPressed: boolean;
      _playerWorldX: number;
      _playerStarAward: () => void;
      _playTime: number;
      _positionAttemptsLabel: () => void;
      _positionMenuItems: () => void;
      _prevCameraX: number;
      _pushButton: () => void;
      _quantizeDelta: (delta: number) => void;
      _releaseButton: () => void;
      _resetGameplayState: () => void;
      _restartLevel: () => void;
      _resumeGame: () => void;
      _robLogo: Phaser.GameObjects.Image | null;
      _setParticleTimeScale: (scale: number) => void;
      _sfxVolume: number;
      _showCompleteEffect: () => void;
      _showCompleteText: () => void;
      _showEndLayer: () => void;
      _showNewBest: () => void;
      _slideGroundX: null;
      _slideIn: boolean;
      _spaceKey: Phaser.Input.Keyboard.Key;
      _spaceWasDown: boolean;
      _startGame: () => void;
      _state: {
        canJump: boolean;
        isFlying: boolean;
        isDead: boolean;
        collideBottom: number;
        collideTop: number;
        gravityFlipped: boolean;
        isJumping: boolean;
        lastGroundPosY: number;
        lastGroundY: number;
        lastY: number;
        onCeiling: boolean;
        onGround: boolean;
        upKeyDown: boolean;
        upKeyPressed: boolean;
        wasBoosted: boolean;
        y: number;
        yVelocity: number;
      };
      _sys: Phaser.Game; // That's what it looks like, might be something else
      _totalJumps: number;
      _tryMeImg: Phaser.GameObjects.Image;
      _upKey: Phaser.Input.Keyboard.Key;
    };
  }
}
