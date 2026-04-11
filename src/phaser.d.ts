import type Phaser from "phaser";

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
      _player: {
        _flyParticle2Active: boolean;
        _flyParticle2Emitter: Phaser.GameObjects.Particles.ParticleEmitter;
        _flyParticleActive: boolean;
        _flyParticleEmitter: Phaser.GameObjects.Particles.ParticleEmitter;
        _gameLayer: any; // TODO: figure out type
        _landEmitter1: Phaser.GameObjects.Particles.ParticleEmitter;
        _landEmitter2: Phaser.GameObjects.Particles.ParticleEmitter;
        _landIdx: boolean;
        _lastCameraX: number;
        _lastCameraY: number;
        _lastLandObject: null; // TODO: figure out what this is when it isn't null
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
        _streak: any; // TODO: type
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
        enterShipMode: (portal: any) => void; // TODO: portal type
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
      };
      _fpsText: Phaser.GameObjects.Text;
      _buildHud: () => void;
      _buildInfoPopup: () => void;
      _buildPauseOverlay: () => void;
      _cameraX: number;
      _cameraXRef: { _v: number };
      _cameraY: number;
      _closeInfoPopup: () => void;
      _colorManager: any; // TODO: Color Manager (class?)
      _copyrightText: Phaser.GameObjects.Text;
      _deathSoundPlayed: boolean;
      _deathTimer: number;
      _deltaBuffer: number;
      _downloadButtons: Phaser.GameObjects.Image[];
      _drawScale9: (/* TODO: Args, I think it's a ninslice func */) => void;
      _endCameraOverride: boolean;
      _endCamTween?: null; // TODO: type when not null
      _endPortalGameY: number;
      _escKey: Phaser.Input.Keyboard.Key;
      _expandHitArea: (/* TODO: Args */) => void;
      _firstPlay: boolean;
      _fpsAccum: number;
      _fpsFrames: number;
      _glitterCenterX: number;
      _glitterCenterY: number;
      _glitterEmitter: Phaser.GameObjects.Particles.ParticleEmitter;
      _hadNewBest: boolean;
      _hideEndLayer: (/* TODO: Args */) => void;
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
        _collisionSections: any[][]; //  TODO: type
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
        _nearbyBuffer: any[]; // TODO: type
        _scene: typeof window.gdScene;
        _sectionContainers: any[]; // TODO: type
        _sections: any[]; // TODO: type
        _tileW: number;
        _visMaxSec: number;
        _visMinSec: number;
        additiveContainer: Phaser.GameObjects.Container;
        container: Phaser.GameObjects.Container;
        endXPos: number;
        flyCameraTarget: null; // Is it something else sometimes?
        objects: any[]; // TODO: type
        topContainer: Phaser.GameObjects.Container;
        getNearbySectionObjects: (worldX: number) => any; // TODO: return type
        checkEnterEffectTriggers: (playerX: number) => void;
        resetEnterEffectTriggers: () => void;
        applyEnterEffects: (cameraX: number) => void;
        setGroundColor: (tint: number) => void;
        updateAudioScale: (scale: number) => void;
        resetVisibility: () => void;
        resetObjects: () => void;
        updateVisibility: (cameraX: number) => void;
      };
      _levelComplete: () => void;
      _levelWon: boolean;
      _logo: Phaser.GameObjects.Image;
      _makeBouncyButton: (/* TODO: Args (and return) */) => unknown;
      _menuActive: boolean;
      _menuCameraX: number;
      _menuFsBtn: Phaser.GameObjects.Image;
      _menuGlitter: Phaser.GameObjects.Particles.ParticleEmitter;
      _menuInfoBtn: Phaser.GameObjects.Image;
      _newBestShown: boolean;
      _onFullscreenChange: (/* TODO: Args */) => void;
      _pauseBtn: Phaser.GameObjects.Image;
      _pauseContainer: null; // IDK, might be something else sometimes
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
      _quantizeDelta: (/* TODO: Args */) => void;
      _releaseButton: () => void;
      _resetGameplayState: () => void;
      _restartLevel: () => void;
      _resumeGame: () => void;
      _robLogo: Phaser.GameObjects.Image | null;
      _setParticleTimeScale: (/* TODO: Args */) => void;
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
        onCeiling: boolan;
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

export {};
