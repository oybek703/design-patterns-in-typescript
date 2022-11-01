enum ImageFormat {
    Png = 'png',
    Jpg = 'jpg'
}

interface IResolution {
    width: number
    height: number
}

interface ImageConversion extends IResolution {
    format: ImageFormat
}

class ImageBuilder {
    private formats: ImageFormat[] = []
    private resolutions: IResolution[] = []

    addPng() {
        if (this.formats.includes(ImageFormat.Png)) {
            return this
        }
        this.formats.push(ImageFormat.Png)
        return this
    }

    addJpg() {
        if (this.formats.includes(ImageFormat.Jpg)) {
            return this
        }
        this.formats.push(ImageFormat.Jpg)
        return this
    }

    addResolution(width: number, height: number) {
        this.resolutions.push({width, height})
        return this
    }

    build(): ImageConversion[] {
        const res: ImageConversion[] = []
        for (const resolution of this.resolutions) {
            for (const format of this.formats) {
                res.push({width: resolution.width, height: resolution.height, format})
            }
        }
        return res
    }
}

console.log(
    new ImageBuilder()
        .addJpg()
        .addPng()
        .addResolution(100, 101)
        .addResolution(9, 10)
        .build()
)
