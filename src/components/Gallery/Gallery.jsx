import GalleryItems from "../GalleryItem/GalleryItem";

export default function Gallery({items}) {
    return <ul>
        {items.map(({ id, title }) => <GalleryItems key={id}
            title={title}
            id={ id} />)}
</ul>
}