import Navbar from '../../components/Navigation/Navbar'
import styles from './zone-matrix.scss'

export default function ZoneMatrix() {

    return (
        <>
        <style jsx>{styles}</style>

        <Navbar />
        <main>
            <dl>
                <dt>Beast of Bodmin</dt>
                <dd>A large feline inhabiting Bodmin Moor.</dd>

                <dt>Morgawr</dt>
                <dd>A sea serpent.</dd>

                <dt>Owlman</dt>
                <dd>A giant owl-like creature.</dd>
            </dl>


        </main>
        </>
    )
}
