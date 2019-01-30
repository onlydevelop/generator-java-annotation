package <%= packageName %>;

import spock.lang.Specification
import spock.lang.Unroll

class <%= className %>Spec extends Specification {
    @Unroll
    def "returns #c to add #a with #b"() {
        setup:
        def cut = new <%= className %>()

        expect:
        cut.add(a,b) == c

        where:
        c  | a  | b
        3  | 1  | 2
        0  | 1  | -1
    }
}
