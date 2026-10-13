const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Button,
		C3.Behaviors.Platform,
		C3.Behaviors.wrap,
		C3.Behaviors.Bullet,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Plugins.Audio,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.Sprite.Acts.SetAngle
	];
};
self.C3_JsPropNameTable = [
	{background: 0},
	{Chracter: 0},
	{PLAY: 0},
	{exit: 0},
	{background2: 0},
	{Platform: 0},
	{Wrap: 0},
	{character2: 0},
	{Bullet: 0},
	{coin2: 0},
	{Solid: 0},
	{tanah: 0},
	{scor: 0},
	{music: 0},
	{bg3: 0},
	{aku: 0},
	{nama: 0},
	{kelas: 0},
	{SKOR: 0}
];

self.InstanceType = {
	background: class extends self.ISpriteInstance {},
	Chracter: class extends self.ISpriteInstance {},
	PLAY: class extends self.IButtonInstance {},
	exit: class extends self.IButtonInstance {},
	background2: class extends self.ISpriteInstance {},
	character2: class extends self.ISpriteInstance {},
	coin2: class extends self.ISpriteInstance {},
	tanah: class extends self.ISpriteInstance {},
	scor: class extends self.ITextInstance {},
	music: class extends self.IInstance {},
	bg3: class extends self.ISpriteInstance {},
	aku: class extends self.ISpriteInstance {},
	nama: class extends self.ITextInstance {},
	kelas: class extends self.ITextInstance {}
}